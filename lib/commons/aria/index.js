var aria = commons.aria = {},
	lookupTables = aria._lut = {};

lookupTables.attributes = {
	'aria-activedescendant': {
		type: 'idref'
	},
	'aria-atomic': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-autocomplete': {
		type: 'nmtoken',
		values: ['inline', 'list', 'both', 'none']
	},
	'aria-busy': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-checked': {
		type: 'nmtoken',
		values: ['true', 'false', 'mixed', 'undefined']
	},
	'aria-colcount': {
		type: 'int'
	},
	'aria-colindex': {
		type: 'int'
	},
	'aria-colspan': {
		type: 'int'
	},
	'aria-controls': {
		type: 'idrefs'
	},
	'aria-describedby': {
		type: 'idrefs'
	},
	'aria-disabled': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-dropeffect': {
		type: 'nmtokens',
		values: ['copy', 'move', 'reference', 'execute', 'popup', 'none']
	},
	'aria-expanded': {
		type: 'nmtoken',
		values: ['true', 'false', 'undefined']
	},
	'aria-flowto': {
		type: 'idrefs'
	},
	'aria-grabbed': {
		type: 'nmtoken',
		values: ['true', 'false', 'undefined']
	},
	'aria-haspopup': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-hidden': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-invalid': {
		type: 'nmtoken',
		values: ['true', 'false', 'spelling', 'grammar']
	},
	'aria-label': {
		type: 'string'
	},
	'aria-labelledby': {
		type: 'idrefs'
	},
	'aria-level': {
		type: 'int'
	},
	'aria-live': {
		type: 'nmtoken',
		values: ['off', 'polite', 'assertive']
	},
	'aria-multiline': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-multiselectable': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-orientation' : {
		type : 'nmtoken',
		values : ['horizontal', 'vertical']
	},
	'aria-owns': {
		type: 'idrefs'
	},
	'aria-posinset': {
		type: 'int'
	},
	'aria-pressed': {
		type: 'nmtoken',
		values: ['true', 'false', 'mixed', 'undefined']
	},
	'aria-readonly': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-relevant': {
		type: 'nmtokens',
		values: ['additions', 'removals', 'text', 'all']
	},
	'aria-required': {
		type: 'boolean',
		values: ['true', 'false']
	},
	'aria-rowcount': {
		type: 'int'
	},
	'aria-rowindex': {
		type: 'int'
	},
	'aria-rowspan': {
		type: 'int'
	},
	'aria-selected': {
		type: 'nmtoken',
		values: ['true', 'false', 'undefined']
	},
	'aria-setsize': {
		type: 'int'
	},
	'aria-sort': {
		type: 'nmtoken',
		values: ['ascending', 'descending', 'other', 'none']
	},
	'aria-valuemax': {
		type: 'decimal'
	},
	'aria-valuemin': {
		type: 'decimal'
	},
	'aria-valuenow': {
		type: 'decimal'
	},
	'aria-valuetext': {
		type: 'string'
	}
};

lookupTables.globalAttributes = [
	'aria-atomic', 'aria-busy', 'aria-controls', 'aria-describedby',
	'aria-disabled', 'aria-dropeffect', 'aria-flowto', 'aria-grabbed',
	'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-label',
	'aria-labelledby', 'aria-live', 'aria-owns', 'aria-relevant'
];

lookupTables.role = {
	'alert': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'alertdialog': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'application': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'article': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['article'],
		childrenArePresentational: false
	},
	'banner': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'button': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded', 'aria-pressed']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		implicit: ['button', 'input[type="button"]', 'input[type="image"]'],
		childrenArePresentational: true
	},
	'cell': {
		type: 'structure',
		attributes: {
			allowed: ['aria-colindex', 'aria-colspan', 'aria-rowindex', 'aria-rowspan']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['row'],
		childrenArePresentational: false
	},
	'checkbox': {
		type: 'widget',
		attributes:  {
			required: ['aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		implicit: ['input[type="checkbox"]'],
		childrenArePresentational: true
	},
	'columnheader': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded', 'aria-sort', 'aria-readonly', 'aria-selected', 'aria-required']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['row'],
		childrenArePresentational: false
	},
	'combobox': {
		type: 'composite',
		attributes:  {
			required: ['aria-expanded'],
			allowed: ['aria-autocomplete', 'aria-required', 'aria-activedescendant']
		},
		owned: {
			all: ['listbox', 'textbox']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'command': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'complementary': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['aside'],
		childrenArePresentational: false
	},
	'composite': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'contentinfo': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'definition': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'dialog': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['dialog'],
		childrenArePresentational: false
	},
	'directory': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		childrenArePresentational: false
	},
	'document': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['body'],
		childrenArePresentational: false
	},
	'form': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'grid': {
		type: 'composite',
		attributes: {
			allowed: ['aria-level', 'aria-multiselectable', 'aria-readonly', 'aria-activedescendant', 'aria-expanded']
		},
		owned: {
			one: ['rowgroup', 'row']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'gridcell': {
		type: 'widget',
		attributes: {
			allowed: ['aria-selected', 'aria-readonly', 'aria-expanded', 'aria-required']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['row'],
		childrenArePresentational: false
	},
	'group': {
		type: 'structure',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['details'],
		childrenArePresentational: false
	},
	'heading': {
		type: 'structure',
		attributes: {
			allowed: ['aria-level', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		implicit: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		childrenArePresentational: false
	},
	'img': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['img'],
		childrenArePresentational: false
	},
	'input': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'landmark': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'link': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		implicit: ['a[href]'],
		childrenArePresentational: false
	},
	'list': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: {
			all: ['listitem']
		},
		nameFrom: ['author'],
		context: null,
		implicit: ['ol', 'ul'],
		childrenArePresentational: false
	},
	'listbox': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded']
		},
		owned: {
			all: ['option']
		},
		nameFrom: ['author'],
		context: null,
		implicit: ['select'],
		childrenArePresentational: false
	},
	'listitem': {
		type: 'structure',
		attributes: {
			allowed: ['aria-level', 'aria-posinset', 'aria-setsize', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['list'],
		implicit: ['li'],
		childrenArePresentational: false
	},
	'log': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'main': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'marquee': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'math': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: true
	},
	'menu': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded']
		},
		owned: {
			one: ['menuitem', 'menuitemradio', 'menuitemcheckbox']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'menubar': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'menuitem': {
		type: 'widget',
		attributes: null,
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['menu', 'menubar'],
		childrenArePresentational: false
	},
	'menuitemcheckbox': {
		type: 'widget',
		attributes: {
			required: ['aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['menu', 'menubar'],
		childrenArePresentational: true
	},
	'menuitemradio': {
		type: 'widget',
		attributes:  {
			allowed: ['aria-selected', 'aria-posinset', 'aria-setsize'],
			required: ['aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['menu', 'menubar'],
		childrenArePresentational: true
	},
	'navigation': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'none': {
		type: 'structure',
		attributes: null,
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'note': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'option': {
		type: 'widget',
		attributes: {
			allowed: ['aria-selected', 'aria-posinset', 'aria-setsize', 'aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['listbox'],
		childrenArePresentational: true
	},
	'presentation': {
		type: 'structure',
		attributes: null,
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'progressbar': {
		type: 'widget',
		attributes: {
			allowed: ['aria-valuetext', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: true
	},
	'radio': {
		type: 'widget',
		attributes:  {
			allowed: ['aria-selected', 'aria-posinset', 'aria-setsize'],
			required: ['aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		implicit: ['input[type="radio"]'],
		childrenArePresentational: true
	},
	'radiogroup': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-required', 'aria-expanded']
		},
		owned: {
			all: ['radio']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'range': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'region': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['section'],
		childrenArePresentational: false
	},
	'roletype': {
		type: 'abstract',
		childrenArePresentational: false
	},
	'row': {
		type: 'structure',
		attributes: {
			allowed: ['aria-level', 'aria-selected', 'aria-activedescendant', 'aria-expanded']
		},
		owned: {
			one: ['cell', 'columnheader', 'rowheader', 'gridcell']
		},
		nameFrom: ['author', 'contents'],
		context:  ['rowgroup', 'grid', 'treegrid', 'table'],
		childrenArePresentational: false
	},
	'rowgroup': {
		type: 'structure',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded']
		},
		owned: {
			all: ['row']
		},
		nameFrom: ['author', 'contents'],
		context:  ['grid', 'table'],
		childrenArePresentational: false
	},
	'rowheader': {
		type: 'structure',
		attributes: {
			allowed: ['aria-sort', 'aria-required', 'aria-readonly', 'aria-expanded', 'aria-selected']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['row'],
		childrenArePresentational: false
	},
	'scrollbar': {
		type: 'widget',
		attributes: {
			required: ['aria-controls', 'aria-orientation', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin'],
			allowed: ['aria-valuetext']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: true
	},
	'search': {
		type: 'landmark',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'searchbox': {
		type: 'widget',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['input[type="search"]'],
		childrenArePresentational: false
	},
	'section': {
		nameFrom: ['author', 'contents'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'sectionhead': {
		nameFrom: ['author', 'contents'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'select': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	},
	'separator': {
		type: 'structure',
		attributes: {
			allowed: ['aria-expanded', 'aria-orientation']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: true
	},
	'slider': {
		type: 'widget',
		attributes: {
			allowed: ['aria-valuetext', 'aria-orientation'],
			required: ['aria-valuenow', 'aria-valuemax', 'aria-valuemin']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: true
	},
	'spinbutton': {
		type: 'widget',
		attributes: {
			allowed: ['aria-valuetext', 'aria-required'],
			required: ['aria-valuenow', 'aria-valuemax', 'aria-valuemin']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'status': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['output'],
		childrenArePresentational: false
	},
	'structure': {
		type: 'abstract'
	},
	'switch': {
		type: 'widget',
		attributes:  {
			required: ['aria-checked']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		childrenArePresentational: true
	},
	'tab': {
		type: 'widget',
		attributes: {
			allowed: ['aria-selected', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['tablist'],
		childrenArePresentational: true
	},
	'table': {
		type: 'structure',
		attributes: {
			allowed: ['aria-colcount', 'aria-rowcount']
		},
		owned: {
			one: ['rowgroup', 'row']
		},
		nameFrom: ['author'],
		context: null,
		implicit: ['table'],
		childrenArePresentational: false
	},
	'tablist': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded', 'aria-level', 'aria-multiselectable']
		},
		owned: {
			all: ['tab']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'tabpanel': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'text': {
		type: 'structure',
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		childrenArePresentational: false
	},
	'textbox': {
		type: 'widget',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-autocomplete', 'aria-multiline', 'aria-readonly', 'aria-required']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['input[type="text"]', 'input:not([type])'],
		childrenArePresentational: false
	},
	'timer': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'toolbar': {
		type: 'structure',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded']
		},
		owned: null,
		nameFrom: ['author'],
		context: null,
		implicit: ['menu[type="toolbar"]'],
		childrenArePresentational: false
	},
	'tooltip': {
		type: 'widget',
		attributes: {
			allowed: ['aria-expanded']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: null,
		childrenArePresentational: false
	},
	'tree': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-multiselectable', 'aria-required', 'aria-expanded']
		},
		owned: {
			all: ['treeitem']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'treegrid': {
		type: 'composite',
		attributes: {
			allowed: ['aria-activedescendant', 'aria-expanded', 'aria-level', 'aria-multiselectable',
				'aria-readonly', 'aria-required']
		},
		owned: {
			all: ['treeitem']
		},
		nameFrom: ['author'],
		context: null,
		childrenArePresentational: false
	},
	'treeitem': {
		type: 'widget',
		attributes: {
			allowed: ['aria-checked', 'aria-selected', 'aria-expanded', 'aria-level', 'aria-posinset', 'aria-setsize']
		},
		owned: null,
		nameFrom: ['author', 'contents'],
		context: ['treegrid', 'tree'],
		childrenArePresentational: false
	},
	'widget': {
		type: 'abstract',
		childrenArePresentational: false
	},
	'window': {
		nameFrom: ['author'],
		type: 'abstract',
		childrenArePresentational: false
	}
};
