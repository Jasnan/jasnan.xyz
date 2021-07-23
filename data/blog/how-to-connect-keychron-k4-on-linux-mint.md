---
title: How to Connect Keychron K4 on Linux Mint
date: '2021-07-24'
tags: ['linux']
draft: false
summary: In wired mode, Keychron keyboards will work out of the box with Debian-based systems. To connect via Bluetooth, here is what you have to do.
images: []
layout: PostLayout
authors: ['default']
---

I use a [Keychron K4](https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard) Bluetooth mechanical keyboard for over a year now. Even though I've chosen the wrong model (red keys), I still like the experience a lot while gaming and controlling the PC from the couch.

The keyboard can use with Mac, Windows, Linux, and Android. With Mac, both wired and Bluetooth mode works out of the box. However, that is not the case with Linux Mint: it has to do some additional tweaks to connect in Bluetooth mode.

Make sure the keyboard is running on the latest firmware. The firmware upgrade is only possible from either on Mac or Windows systems.

Create the file `/etc/modprobe.d/hid_apple.conf` with following entry

```
options hid_apple fnmode=0
```

Now the keyboard should be able to connect via Bluetooth.
