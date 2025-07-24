---
layout: page
title: Electronic music and tutorial videos
subtitle:
---

### Snowdeaf

- Electronic music production from Helsinki, Finland

### Gear

- ASM Hydrasynth Keyboard - [#hydrasynth](/tags#hydrasynth)
- Arturia Minibrute 2S with a bunch of Eurorack modules on a couple of 6U Rackbrutes - [#minibrute](/tags#minibrute) [#eurorack](/tags#eurorack)
- Synthstrom Deluge - [#synthstrom deluge](/tags#synthstrom%20deluge)
- Smpltrek - [#smpltrek](/tags#smpltrek)
- Novation Circuit
- Roland JD-Xi
- Empress Effects ZOIA - [#zoia](/tags#zoia)
- Akai MPD226
- guitars, basses, effects etc - [#guitar](/tags#guitar)

---

### Quick Test: Animated Tabs Component

<div class="animated-tabs" style="margin: 20px 0; max-width: 500px;">
  <ul class="animated-tabs-list">
    <li class="animated-tab">
      <a href="#music" class="animated-tab-trigger active">Music</a>
    </li>
    <li class="animated-tab">
      <a href="#gear" class="animated-tab-trigger">Gear</a>
    </li>
    <li class="animated-tab">
      <a href="#tutorials" class="animated-tab-trigger">Tutorials</a>
    </li>
  </ul>
</div>

<div class="tab-content" style="margin-top: 15px;">
  <div id="music" class="tab-pane active" style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
    <strong>Electronic Music:</strong> Ambient techno and experimental sounds from Helsinki.
  </div>
  <div id="gear" class="tab-pane" style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; display: none;">
    <strong>Hardware:</strong> Synthstrom Deluge, Hydrasynth, Eurorack modules, and more.
  </div>
  <div id="tutorials" class="tab-pane" style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; display: none;">
    <strong>Videos:</strong> Music production tutorials and gear demonstrations.
  </div>
</div>

<script>
$(document).ready(function() {
  $('.animated-tabs').animatedTabs({
    onTabChange: function(index, tab) {
      var href = $(tab).find('.animated-tab-trigger').attr('href');
      if (href && href.startsWith('#')) {
        $('.tab-pane').hide();
        $(href).show();
      }
    }
  });
});
</script>
