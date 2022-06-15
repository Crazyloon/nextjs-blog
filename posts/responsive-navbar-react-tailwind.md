---
title: "Building a Responsive Navbar with React and Tailwind"
date: "2022-05-27"
author: "Russell Dow"
homepage: "https://www.nandradventures.com"
tags: ["beginner", "react", "tailwind", "fontawesome"]
---

# Introduction

The navigation bar is like a freeway that connects users to the most important locations in your digital city. It should provide a smooth navigation experience that gets users where they want to go with very little thought.

In this article I will show you how to build a simple navigation bar that responds to the user's screen size using [Tailwind CSS](https://tailwindcss.com/) and [React](https://reactjs.org/)

Here's an example of what we'll build.
<img class="mt-1 border border-gray-800" alt="responsive nav animation" src="/gifs/ResponsiveNav.gif" />

Before we begin, take a moment to consider the layout and any differences between components. How many unique components are there, not including the navigation bar itself? When we're done, take some time to think about how you would have broken the navigation apart into smaller components. Maybe you would have created this differently from the start, or maybe you really like the structure we're about to build.

Anyway, lets start with some designs and then define some requirements.

# Getting Started

## Designs

Navbar Light Theme
![navbar large light theme](/images/navbar_lg_light.jpg)

Navbar Dark Theme
![navbar large](/images/navbar_lg.jpg)

Navbar Opened
![navbar open](/images/navbar_open.jpg)

Navbar Collapsed
![navbar small](/images/navbar_sm.jpg)

## Requirements

1. (closed state) When viewed on a small screen the nav bar should only show the brand icon and a toggle button.
2. (open state) When viewed on a small screen the nav bar should open downward displaying the brand icon with brand text along with all links and their link text. The last item in the list should be a toggle button that toggles the theme.
3. (open state) When the user performs a click interaction with anything, the menu should transition to a closed state.
4. When viewed on a large screen, the nav bar should display the brand icon, without the brand text, and all navigation links, with their text. They should all be left aligned.
5. When viewed on a large screen, the theme toggle should only show an icon, and it should be aligned to the right.

The number one rule of requirements is that they're always incomplete. Sometimes this is a good thing, as it gives us a little bit of creative control over the components we build. Other times it causes a lot of headache when our understanding of the requirements does not align with the stakeholders.

## Breakdown

Based on these requirements, I've separated the components into these categories:

- [Brand Link](#brand-link-component)
- [Navigation Link](#nav-link-component)
- [Theme Toggle](#theme-toggle-component)
- [Menu Toggle](#menu-toggle-component)

We can design these components in isolation, then compose the Navbar from them.

Lets start with the Brand Link.

### <a name="brand-link-component"></a>Brand Link

The Brand Link component has five props, but only two that you'll really change programattically. The two that change are `active` which determines it's background color, and `display` which is used to determine both the display property. The other three are pretty self explanatory `url` for the link, `text` for what it says when it's visible, and `icon` to show.

### <a name="nav-link-component"></a>Navigation Link

### <a name="theme-toggle-component"></a>Theme Toggle

### <a name="menu-toggle-component"></a>Menu Toggle
