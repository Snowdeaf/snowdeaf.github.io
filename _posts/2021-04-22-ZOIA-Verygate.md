---
title: ZOIA Verygate
date: 2021-04-22 12:20:20 +0300
categories: [Blogging, Youtube]
tags: [Zoia, varigate, eurorack, sequencer]
youtube_id: Mm2glT_Rxtc
---


<div class="embed-responsive embed-responsive-16by9" >
    <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/{{ page.youtube_id }}"></iframe>
</div>

Here’s a patch inspired by the Malekko Heavy Industry Varigate Eurorack module.
Varigate is an 8 step sequencer with sliders to quickly access probability, ratchet and note values etc. It is a very inspiring module and I tried to capture the essence of it here. You even have to turn your ZOIA into &quot;portrait mode&quot;! 

I replicated some of the features with ZOIAs button interface. Varigate has 2 cv/gate pairs, but here I am using ZOIAs midi module to control one cv and gate. There are controls for the probability, ratchet and note value with shortcuts to reset to default values. There's also a button to select scales based on ZOIAs default quantizer. And a quick access to tempo, as well.

ZOIA is very capable to do this but I did run out of memory and couldn’t for instance implement a limit check for negative values for gates and ratchets so the user has some responsibilites as well!

As a sound source IO Instruments Himalia is used with some reverb from Expert Sleepers Disting MK4. 

The patch can be downloaded from Patchstorage for free: https://patchstorage.com/zoia-verygate/

Special thanks to Hakon Soreide for a much simpler solution to probability than I first originally tried myself : https://youtu.be/VJYqKoRggCA