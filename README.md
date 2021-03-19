# Powerline for Visual Studio Code

![Powerline](https://i.imgur.com/SWGo8aC.png)

This is a port of the popular [Powerline] Vim theme to Visual Studio Code. I created it because I realized how much I missed Powerline after going back to command line Vim for a bit.

VS Code Powerline consists of two subprojects, each of which is optional:

1. A custom CSS file for use with the [Custom CSS and JS Loader] extension that provides the Powerline styling.

2. An extension that displays the line and column number in Powerline style.

*Since this is custom CSS, it should be considered a totally unsupported hack.* It will eat your laundry. That said, it's just CSS, so it won't break much. Probably.

This project is designed and tested with the [VSCodeVim] extension, but it can be used fine without it, though the styling won't be ideal if not in Vim mode (patches welcome to improve the situation).

## Installation

1. Clone the project on GitHub.

2. Install the [Custom CSS and JS Loader] extension from the Visual Studio Code Marketplace. Make sure to follow its instructions so that VS Code has permission to patch itself.

3. Add the following line to your VS Code `settings.json`, replacing `/path/to/vscode-powerline` with the full path to the directory you cloned the project to:

```json
"vscode_custom_css.imports": [
    "file:///path/to/vscode-powerline/powerline.css"
],
```

(Note that the `file:///` part is required.)

4. (Optional) Now build the line and column number extension, if you wish. From the `vscode-powerline` directory, run:

```shell
$ cd powerline-status
$ npm i
$ vsce package
```

5. (Optional) To install the line and column number extension, run the "Extensions: Install From VSIX…" command from within Visual Studio Code (via Cmd+Shift+P) and navigate to the `.vsix` package you built.

6. Restart Visual Studio Code.

7. (Optional) To remove the "[Unsupported]" string in the title bar, install the [Fix VSCode Checksums] extension and follow its instructions.

## Themes

VS Code Powerline comes with support for the onedark and Solarized Dark themes. It falls back to the Airline dark theme if neither is in use. If you want to add more or customize the colors in other ways, just edit the CSS variables at the top of `powerline.css`.

## Screenshot

![Screenshot](https://i.imgur.com/Ci2ewLt.png)

## Future work

I'll upload the line and column number indicator to the Marketplace once I've tested it some more.

[Powerline]: https://github.com/powerline/powerline

[Custom CSS and JS Loader]: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css

[VSCodeVim]: https://marketplace.visualstudio.com/items?itemName=vscodevim.vim

[Fix VSCode Checksums]: https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums
