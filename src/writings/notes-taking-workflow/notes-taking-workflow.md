---
author: stepit
title: Notes taking workflow
slug: notes-taking-workflow
created: 2026-03-23
modified: 2026-08-31
summary: How I manage my knowledge base with Neovim, Zotero, and a bit of Lua
category: personal
tags: [workflow, notes]
related: []
to-publish: true
---

## Introduction

I always liked taking notes. Since I started university, I tried to developed my
approach to notes taking, which evolved until what I used today. It all started
as a requirement for me. University was hard, and I was not very good at it,
especially given that I decided to study engineering coming from a psychology
background. To have a chance to graduate, I had to create a framework useful for
keeping track and organizing my thoughts and concepts. Not with big surprise,
the framework I adopted was based on pen and paper. It worked, and I'm very
happy about the resources I created for all the courses I took. I still have
them, and sometimes I like to flip through the pages to recall some of the
concepts my brain is now fighting to remove to free-up some space.

Despite the very nice result of taking (only) physical notes, the approach was
not perfect for a bunch of reasons:

- Not very easy to access or query. Now that I live in Berlin, for me it is
  impossible to access all the books I left in my home country.
- Not very easy to share. In university I was used to share the books after
  passing the exams to other colleagues. Unfortunately, I never received back
  some of them after graduating.
- Not easy to create connections and citations between physical notes. This
  results in scattered or repeated information that are not very easy to keep
  updated or improve over time.

The three points cited above where not a big issue while I a was student, but
they started to be very limiting during the professional growth. Moreover, the
framework was by no means leveraging all the standard tools available on a
personal computer. I'm not referring to only Large Language Models (LLMs), which
are an amazing addition for a modern notes taking/writing workflow, but it was
missing also very simple tools like the possibility to fuzzy find for titles or
contents.

Don't get me wrong, taking physical notes is amazing, and it is still my
favorite approach. When I have to study something, I always start by writing
down concepts and equations on white paper. However, after discovering the tools
I will mentioned in a bit, I realised that was possible to genuinely improve my
system, which is now based on a mixture of physical and digital tools.

## Tools

Below a list of tools I use in my notes taking and sharing workflow:

- [Markdown](https://en.wikipedia.org/wiki/Markdown): a lightweight markup
  language for formatted text.
- [Neovim](https://neovim.io/): a modern and hyperextensible Vim-based text
  editor.
- [tmux](http://github.com/tmux/tmux/wiki/): a terminal multiplexer.
- [Zotero](https://www.zotero.org/): a personal research assistant that helps
  you keep track and organize your research.
- [Eternal Spring](https://www.eternalspring.xyz): my personal blog where I
  publish writings or notes I want to share.
- [Pandoc](https://pandoc.org/): a document converter used to convert from `.md`
  notes to `.pdf`.

In the next sections, I will try to explain why I currently use this tool, and
I'm pretty sure will remain in my workflow for long time.

### Markdown

The thing I personally believe should be the starting point for the development
of the any workflow, is the concept of portability. With this, I mean that all
the requirements needed to use and implement the workflow should be based on
something that is not locked by a vendor or a specific operating system. Since
notes are based on text, it was imperative for me to write on a system that was
easily usable in any software or tool, and also readable without any of them.
Makrdown is the perfect tool to achieve this. With markdown, you can easily
write text on a plain text file while being able to also add basic formatting
and style. What is cool about this text format, is that you can obtain fairly
nice rendered text on a browser, but at the same time you can also easily read
it from the plain file. In this moment for example, I'm writing this article by
formatting headers, link, bold, and other styling option from my terminal. But
you don't need a terminal, you could also do the same from your phone, or
whatever allows you to open a plain text file. Great right?

### Zotero

Add the [Better BibText for Zotero](https://retorque.re/zotero-better-bibtex/)
plugin to simplify citation keys management.

From the plugin you can customize how the citation key is generate. I personally
left the default style `auth.lower + shorttitle(3,3) + year`.

At this point, it is possible to create a BibText reference that is
automatically updated whenever a new item is added or modified. Open Zotero and:

- Right click on the Library or collection you want to export. I'm personally
  exporting the entire library.
- From the pop-up menu select **Export Library ...**.
- Select **Better BibText** as format
- Toggle the **Keep updated** flag, and press **Ok**.
- Select where to store you bibliography source and you are ready to go.

In my case, I called the file `references.bib` and stored in at the root of the
notes repository. This way is easier for me to keep track of all the knowledge
base and remember to sync with the remote all the times it is updated.

### Neovim

Neovim is a modal text editor, which simply means that it is a tool to view and
edit text designed around the idea to always have your end on the keyboard and
to never leave your terminal. It seems pretty basic right? And it is! But,
despite that, it has two amazing features that completely changed my approach of
writing on a computer:

- Is based on **vim motion**.
- It is highly customizable by writing by writing **lua code**.

These two concept are what really revolutionize how I started taking notes.

Instead of Neovim for a couple of years I used [Obsidian](https://obsidian.md/),
a free and extensible software to take notes. It was great, easy too use,
customizable, and open-source. However, it had a big problem, it required all
the times to switch from my terminal to the Obsidian app, losing all the
customizability developed around my Neovim configuration.

#### Vim motions and the modal editor

Vim motions are a way to read and modify text by using only your keyboard.
Neovim inherit these functionalities because it is an extension of the old Vim
software, where the concept of motions and modality have been introduced.

Vim is an open-source text editor program released in 1991. It is a screen-based
text editor, and is **modal** in nature. This means that depending on the mode
you have a different behavior of the software:

- **Normal**: this mode is used for editor commands and is the default one. In
  this mode, you navigate the files or the working directory and can scroll
  through their content.
- **Insert**: in this mode, the user can modify and insert text.
- **Visual**: this mode is used to select areas of text and it is possible to
  act on the selected area of text to perform modifications on multiple lines at
  once.
- **Command-line**: used to execute specific Vim or shell commands.

Based on the mode in which you are, you keyboard behaves in a different way,
allowing you to perform any action without leaving your keyboard. I don't want
to spend to much time on this, there are a lot of useful resources out there,
but just to pique your interest, you can:

- Move trough the file vertically and

#### The power of Lua

For managing the citation, I created a script in my notes plugin to fuzzy find
in the `references.bib` file the citation key via **grep**, and automatically
add the citation into the file.

- Fuzzy finder.

### Pandoc

- Hook into metadata during conversion and customization.

### tmux

A very useful command in tmux while you are writing articles and coding, is
`<prefix-key> + z`. This command allows you to focus full terminal on the
currently active pane. A found it very handy when I want to work on a specific
task and I don't have to switch between coding and notes frequently.

## Handling images

Images are always one of the most important part of papers and articles we
write, and for this reason it is important to understand how to manage them
properly. The first question I asked my self was, where should images be placed?

An amazing tool to work with images is the open source
[ImageMagick](https://github.com/imagemagick/imagemagick). With ImageMagick we
can get images information like the size and memory requirements:

```sh
$ identify <IMAGE_NAME>

<IMAGE_NAME> JPEG 7627x5085 7627x5085+0+0 8-bit sRGB 6.35796MiB 0.000u 0:00.002
```

Or we can resize an image:

```sh
magick <IMAGE_NAME> -resize 1200x <NEW_IMAGE_NAME_AND_FORMAT>
```

These were just two of the many commands we can execute to manage images in our
workflow.

## Env variable

- Env variable pointing to the folder I used for WIP notes and completed notes
- 4 variables I use.

## Knowledge base structure

- Folder with slug containing file slug and files
- inbox and resources

## Structure

- Linter and formatters
- Use of frontmatter

## Other tools

- **Touch typing**
- **Split keyboard**
- **aerospace**: if you are a MacOS user I strongly recommend to install
  aerospace. It is an open-source project inspired on the classic Linux i3 tool
  which provide a automatic tiling of you window. The tool is very handy since
  it allows to have side-by-side multiple software, like for example a terminal
  on the left where you are writing notes about an article you have open in you
  Zotero library on the right. With Aerospace you can move windows on different
  workspace, which is the virtual equivalent of MacOS desktop, and move between
  different placing of the windows. A common workflow I find myself using very
  frequently is from a side-by-side configuration i cited a few lines above, to
  the stacked visualization to have my terminal with the text in the center of
  the screen. You can switch between the two configurations with a single
  keystroke! And well, if you are on Linux I would recommend you i3..

![split-screen-apps](split-screen-apps.png)

![full-screen-apps](full-screen-apps.png)
