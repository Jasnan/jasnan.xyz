---
title: Troubleshooting Bluetooth Connection Issues with Keychron Keyboards on Linux
date: '2021-07-24'
tags: ['linux', 'keychron']
draft: false
summary: If you use a Keychron keyboard in wired mode, it will work with Linux systems without any additional setup. However, if you try to connect the keyboard via Bluetooth, you may encounter some issues. Here are some common problems and their solutions.
images: []
layout: PostLayout
authors: ['default']
---

I've been using the [Keychron K4](https://www.keychron.com/products/keychron-k4-wireless-mechanical-keyboard) Bluetooth mechanical keyboard for two years now and overall, I've really enjoyed the experience. Although I accidentally chose the model with red keys, it's been great for gaming and controlling PC when it is connected to the TV.

When using the keyboard with Linux, it works fine when connected by a wire, but there are some issues when using Bluetooth. Here are the few 🐞🐛🪳 I experienced and the solutions for them. I've used the keyboard with Linux Mint, Debian and Fedora distros.

However, before trying to fix any issues, make sure the keyboard is running on the latest firmware. Unfortunatly, this can only be done on a Mac or Windows system 🤬

## The function keys were not working.

To make the `Fn + F-keys` work on Keychron keyboards in Linux (in both Bluetooth and wired modes), you need to change the hid_apple kernel module's fnmode parameter. Here's a summary of the possible values for this parameter:

- `0 = disabled`: The 'fn' key is disabled. Pressing 'fn'+'F8' will behave like you only pressed 'F8'.
- `1 = fkeyslast`: Function keys are used as the last key. Pressing 'F8' will act as a special key, while pressing 'fn'+'F8' will behave like an F8.
- `2 = fkeysfirst`: Function keys are used as the first key. Pressing 'F8' will behave like an F8, while pressing 'fn'+'F8' will act as a special key (play/pause).

Choose the value that works best for you. I chose 0, which worked for me. To make this change permanent, follow these steps:

1. Create a file called `/etc/modprobe.d/hid_apple.conf`
2. Add the line `options hid_apple fnmode=0` to the file.
3. Save the file.
4. Run `sudo update-initramfs -u`.
5. Reboot.

## Keyboard may become stuck in numlock mode after Bluetooth connection.

Perhaps one of the most frustrating issue I have experienced with this keyboard is that after a certain period of time, many of the keys become disabled and typing certain alphabet keys results in numbers being input instead. If you find yourself in this "numpad mode," you can fix it by quickly pressing `F6` or `fn + F6`.

## Keyboard takes a long time to establish the connection when using Bluetooth

If the keyboard takes a long time to connect the computer via Bluetooth, you can try enabling the Bluetooth fast connect feature. This can typically reduce the connection time to less than one second. To do this, edit the file `/etc/bluetooth/main.conf` and uncomment the `FastConnectable` config line, setting it to "true." Also uncomment the `ReconnectAttempts` and `ReconnectIntervals` lines and set their values to your desired number.

So I hope this post has been helpful in resolving some of the Bluetooth connection issues you may have experienced while using your Keychron keyboard on Linux.
