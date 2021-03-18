// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
	context.subscriptions.push(statusBarItem);

	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));
	updateStatusBarItem();
}

// this method is called when your extension is deactivated
export function deactivate() { }

function updateStatusBarItem() {
	const editor = vscode.window.activeTextEditor;
	if (editor == null) {
		statusBarItem.hide();
		return;
	}

	const pos = editor.selection.start;
	const percent = "" + Math.round(pos.line / editor.document.lineCount * 100.0) + "% ☰";
	const line = "" + (pos.line + 1) + "/" + (editor.document.lineCount) + " ㏑";
	const column = "" + (pos.character + 1);
	const label = percent + " " + line + " : " + column;
	statusBarItem.text = label;
	statusBarItem.show();
}
