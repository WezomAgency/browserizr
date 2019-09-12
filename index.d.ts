declare interface Browserizr {
	isAndroid (): boolean;
	isAndroid3 (): boolean;
	isAndroid4 (): boolean;
	isAndroid5 (): boolean;
	isAndroid6 (): boolean;
	isAndroid7 (): boolean;
	isAndroid8 (): boolean;
	isMeizuPhone (): boolean;
	isMeizuNotePhone (): boolean;
	isRedmiPhone (): boolean;
	isRedmiNotePhone (): boolean;
	isIPad (): boolean;
	isIPod (): boolean;
	isIPhone (): boolean;
	isIPhone4 (): boolean;
	isIPhone5 (): boolean;
	isIPhone678 (): boolean;
	isIPhone678plus (): boolean;
	isIPhoneX (): boolean;
	isIOS (): boolean;
	isMac (): boolean;
	isMacLike (): boolean;
	isBlackBerry (): boolean;
	isBlackBerry10 (): boolean;
	isMoz (): boolean;
	isOpera (): boolean;
	isSafari (): boolean;
	isChrome (): boolean;
	isIE (): boolean;
	isIE8 (): boolean;
	isIE9 (): boolean;
	isIE10 (): boolean;
	isIE11 (): boolean;
	isEdge (): boolean;
	isEdgeIOS (): boolean;
	isEdgeAndroid (): boolean;
	isWindowsPhone (): boolean;
	isWindows (): boolean;
	isWindowsXP (): boolean;
	isWindowsVista (): boolean;
	isWindows7 (): boolean;
	isWindows8 (): boolean;
	isWindows10 (): boolean;
	isLinux (): boolean;
	isMobile (): boolean;
	isDesktop (): boolean;
	cssClasses (tests: string, classPrefix: string = ''): string[];
}

declare const BrowserizrNS = {
	prefixIs: 'is-',
	prefixIsNot: 'is-not-',
	detect (): Browserizr {}
}

export = BrowserizrNS;
