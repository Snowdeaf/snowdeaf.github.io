---
title: ZOIA MishaLite
date: 2023-04-09 11:40:24 +0300
categories: [Blogging, Youtube]
tags: [Zoia]
youtube_id: rh5n5bTrMl4
---


<div class="embed-responsive embed-responsive-16by9" >
    <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/{{ page.youtube_id }}"></iframe>
</div>

A ZOIAfied version of an interval based controller not unlike the Eventide Misha eurorack module. To get an in-depth explanation how the interval based module works, check out Loopop’s excellent video (https://youtu.be/1RS4giQHAUg).

Basically the buttons play notes on a selected scale based on interval steps (-4,-3,-2,-1,0,+1,+2,+3,+4). 
Try it, you’ll figure it out!

The scale selection is on the top row of first page.

There’s a reset button on the lower right corner to get back to C4.

Red buttons light up on the top row if you go past the lower or upper range. Just play an interval to the opposite direction to get out of the jam. (I could’ve implemented a wrap around instead, I know.)

The lower and upper limit for the range can be adjusted on the second page. 

The patch works via midi (control on the 2nd page) and there’s also a basic oscillator on page 4 with output on LEFT jack.

Note! This does NOT implement the entire logic of Misha. There’s no tonerow sequencer (yet?) and no cv outs, unfortunately I don’t own a Euroburo (yet!). The buttons act as triggers, so sustain is not implemented (yet?). 

A word of warning. The logic relies a lot on cv delays in order to make the thing work and it seems there might be an occasional glitch when the intervals get stuck updating. I don’t know if there’s a glitch on my programming (probably is!) or sometimes the Zoia’s clock just plays tricks on me. You’ll get out of it with the reset button on lower right.

Another word of warning. On scales with only a few notes (fifths, octaves) the process getting the notes is slow. This is caused by the way the patch works. It finds the note to play after each button press and with a lot of “empty” steps in-between, it just takes a longer time.

Anyway, hope you like the patch.

Any feedback would be nice. I’m sure I’ve overlooked something and could’ve made this in a lot simpler way.

You can download the patch on Patchstorage: https://patchstorage.com/author/snowdeaf/