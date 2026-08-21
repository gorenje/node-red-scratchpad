# Scratch Pad

Provides temporary text fields for pasting and copying temporary text or code.

Inspired by Emacs [\*scratch* buffer](https://emacsredux.com/blog/2014/07/25/configure-the-scratch-buffers-mode/).

## Motivation

The scratch-pad is used to store content between edits. 

## Features

### Add Scratch-pads

![img](https://cdn.openmindmap.org/content/scratchpad-add-button.png)

Use the add button to create new scratch-pads and use the delete button to remove them again.

A trashcan clears the contents of the scratch-pad but does not remove the scratch-pad.

If adding new scratches and nodes are selected, then the nodes content will be used to fill the scratches created. One scratch per node is created.

### Copy & Paste

![img](https://cdn.openmindmap.org/content/scratchpad-copy-and-paste.png)

Take content and store it in a scratch-pad for later usage. Use the copy button to copy content to the clipboard for pasting into a node edit.


### Compare

![img](https://cdn.openmindmap.org/content/scratchpad-compare.png)

Compare two scratch-pads for difference. Use the compare button first by highlighting one scratch-pad and then the second to compare the two.


### Storage between reloads

![img](https://cdn.openmindmap.org/content/scratchpad-store.png)

Contents of scratch-pads can be stored for later usage. Use the save button to store the content into the flows.json file for later usage.

### Execute code in the browser

![img](https://cdn.openmindmap.org/content/1786606905105_Screenshot_2026-08-13_at_09.41.18.png)

Contents of the scratch is intrepreted as Javascript code and executed directly in the browser. In the example in the screenshot, it a code snippet for highlighting the immediate nodes connected to the selected node.

### Comparing switch and change nodes

![img](https://cdn.openmindmap.org/content/1787302427320_Screen_Recording_2026-08-21_at_10.51.25.gif)

Sometimes its useful to compare switch or change nodes, using scratchpad this is now possible. What the animation shows is adding a scratch when a nodes is selected: the contents of the node is automatically imported. This can be done with switch and change nodes and their JSON representations are imported.

This JSON representation can then be compared to check for differences. In the case of the animation, only the id and position of the nodes differ, not the rules. Hence one of the nodes can be replaced with the other.

## Artifacts

- [@ flowhub.org](https://flowhub.org/f/cbd4eeb40f5d6e10)
- [@ github.com](https://github.com/gorenje/node-red-scratchpad)
- [@ npmjs.com](https://www.npmjs.com/package/@gregoriusrippenstein/node-red-scratchpad)
- [@ flows.nodered.org](https://flows.nodered.org/node/@gregoriusrippenstein/node-red-scratchpad)
- [@ forum](https://discourse.nodered.org/t/scratchpad-store-contents-between-edits/101304)