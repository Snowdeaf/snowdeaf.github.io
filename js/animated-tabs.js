/**
 * Animated Tabs jQuery Plugin
 * Creates an animated tab component similar to shadcn's animated tabs
 * Compatible with jQuery 1.11.2+ and Bootstrap 3
 */
(function($) {
    'use strict';

    $.fn.animatedTabs = function(options) {
        var settings = $.extend({
            activeClass: 'active',
            indicatorClass: 'animated-tab-indicator',
            duration: 250,
            easing: 'ease',
            onTabChange: null
        }, options);

        return this.each(function() {
            var $container = $(this);
            var $tabs = $container.find('.animated-tab');
            var $triggers = $container.find('.animated-tab-trigger');
            var $indicator = $container.find('.' + settings.indicatorClass);
            
            // Create indicator if it doesn't exist
            if ($indicator.length === 0) {
                $indicator = $('<div class="' + settings.indicatorClass + '"></div>');
                $container.find('.animated-tabs-list').prepend($indicator);
            }

            function updateIndicator($activeTab) {
                var tabOffset = $activeTab.position();
                var tabWidth = $activeTab.outerWidth();
                
                $indicator.css({
                    'width': tabWidth + 'px',
                    'transform': 'translateX(' + tabOffset.left + 'px)'
                });
            }

            function setActiveTab($clickedTab, skipAnimation) {
                var tabIndex = $clickedTab.index();
                
                // Remove active class from all triggers
                $triggers.removeClass(settings.activeClass);
                
                // Add active class to clicked trigger
                $clickedTab.find('.animated-tab-trigger').addClass(settings.activeClass);
                
                // Update indicator position
                if (skipAnimation) {
                    $indicator.css('transition', 'none');
                    updateIndicator($clickedTab);
                    // Force reflow and restore transition
                    $indicator[0].offsetHeight;
                    $indicator.css('transition', 'all ' + settings.duration + 'ms ' + settings.easing);
                } else {
                    updateIndicator($clickedTab);
                }

                // Call callback if provided
                if (typeof settings.onTabChange === 'function') {
                    settings.onTabChange.call($clickedTab[0], tabIndex, $clickedTab);
                }
            }

            // Initialize first tab as active if none are active
            var $activeTab = $tabs.filter(':has(.' + settings.activeClass + ')').first();
            if ($activeTab.length === 0) {
                $activeTab = $tabs.first();
                $activeTab.find('.animated-tab-trigger').addClass(settings.activeClass);
            }

            // Set initial indicator position
            setTimeout(function() {
                updateIndicator($activeTab);
            }, 10);

            // Handle tab clicks
            $triggers.on('click', function(e) {
                var $clickedTab = $(this).closest('.animated-tab');
                var href = $(this).attr('href');
                
                // Only prevent default for hash links (tab content switching)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    if (!$(this).hasClass(settings.activeClass)) {
                        setActiveTab($clickedTab);
                    }
                } else {
                    // For regular links, just update the indicator before navigation
                    if (!$(this).hasClass(settings.activeClass)) {
                        setActiveTab($clickedTab, true);
                    }
                    // Let the browser handle the navigation naturally
                }
            });

            // Handle window resize
            var resizeTimer;
            $(window).on('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    var $currentActive = $tabs.filter(':has(.' + settings.activeClass + ')').first();
                    if ($currentActive.length > 0) {
                        updateIndicator($currentActive);
                    }
                }, 100);
            });

            // Public method to programmatically switch tabs
            $container.data('animatedTabs', {
                switchToTab: function(index) {
                    if (index >= 0 && index < $tabs.length) {
                        var $targetTab = $tabs.eq(index);
                        setActiveTab($targetTab);
                    }
                },
                getActiveIndex: function() {
                    return $tabs.filter(':has(.' + settings.activeClass + ')').index();
                }
            });
        });
    };

    // Auto-initialize on page load
    $(document).ready(function() {
        $('.animated-tabs').animatedTabs();
    });

})(jQuery);