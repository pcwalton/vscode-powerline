// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let positionStatusBarItem: vscode.StatusBarItem;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	positionStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
	context.subscriptions.push(positionStatusBarItem);

	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorVisibleRanges(
		updateStatusBarItem));
	updateStatusBarItem();
}

// this method is called when your extension is deactivated
export function deactivate() { }

function updateStatusBarItem() {
	const editor = vscode.window.activeTextEditor;
	if (editor == null) {
		positionStatusBarItem.hide();
		return;
	}

	const cursorPos = editor.selection.start;
	const line = "" + (cursorPos.line + 1) + "/" + (editor.document.lineCount) + " ";
	const column = "" + (cursorPos.character + 1) + " ";

	const visibleRange = editor.visibleRanges[0];
	const visibleLine = clamp(cursorPos.line, visibleRange.start.line, visibleRange.end.line);
	const percent = "" + Math.round(visibleLine / editor.document.lineCount * 100.0) + "% ☰";

	const label = percent + " " + line + " " + column;
	positionStatusBarItem.text = label;
	positionStatusBarItem.show();
}

function clamp(x: number, minVal: number, maxVal: number): number {
	if (x < minVal)
		return minVal;
	if (x > maxVal)
		return maxVal;
	return x;
}
