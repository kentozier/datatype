// This little function generates a missing symbol in Opera. 
// Without it Opera chokes on "HTMLSpanElement" when compiling 
// the "datatype" source.
(function()
{
	var navString	= navigator.userAgent.toLowerCase();
	if (navString.indexOf('opera') != -1)
	{
		// At some future date, the Opera dev team may 
		// decide to implement an HTMLSpanElement 
		// constructor, so check first before assigning it.
		if (window['HTMLSpanElement'] == undefined)
			window['HTMLSpanElement'] = true;
	}
})();


// DataType function provides finer granularity 
// than native "typeof" function.
function datatype(inValue)
{
	switch (inValue.constructor)
	{
		// Javascript types
		case	Array: return 'array';
		case	String: return 'string';
		case 	Date: return 'date';
		case	Number: return (inValue == Math.floor(inValue)) ? 'int' : 'float' ;
		case	Function: return 'function';
		
		// Shared Javascript/HTML types
		// Calling Javascript's new Image() and 
		// HTML's document.createElememt('img')
		// both return an HTMLImageElement
		case	HTMLImageElement: return 'image';
		
		// HTML object types
		case	HTMLHeadElement: return 'html_head';
		case	HTMLBodyElement: return 'html_body';
		case	HTMLDivElement: return 'html_div';
		case	HTMLSpanElement: return 'html_span';
		case	HTMLCanvasElement: return 'html_canvas';
		case	HTMLParagraphElement: return 'html_paragraph';
		case	HTMLAnchorElement: return 'html_anchor';
		case	HTMLLinkElement: return 'html_link';
		case	HTMLFormElement: return 'html_form';
		case	HTMLIFrameElement: return 'html_iframe';
		case	HTMLAreaElement: return 'html_area';
		case	HTMLMetaElement: return 'html_meta';
		case	HTMLObjectElement: return 'html_object';
		case	HTMLSelectElement: return 'html_select';
		case	HTMLStyleElement: return 'html_style';
		case	HTMLLIElement: return 'html_list_item';
		case	HTMLOptionElement: return 'html_option';
		case	HTMLTextAreaElement: return 'html_text_area';
		case	HTMLScriptElement: return 'html_script';
		case	Text: return 'html_text';
		
		// HTML tables
		case	HTMLTableElement: return 'html_table';
		case	HTMLTableRowElement: return 'html_table_row';
		case	HTMLTableCellElement: return 'html_table_cell';
		
		// HTML input types
		case	HTMLButtonElement: return 'html_button';
		case	HTMLInputElement: return 'html_' + inValue.type;
		
		// Opera specific span detector
		case	HTMLElement:
			{
				var type	= inValue.nodeName.toLowerCase();
					
				if (type == 'span')
					return 'html_span';
				else
					return 'opera_unknown_' + type;
			}
			break;
				
		default:
			// If any of inValue's keys map to functions, 
			// then it is an object. Otherwise it's 
			// a simple key/value array
			for (var key in inValue)
			{
				if (inValue[key].constructor == Function)
					return 'object';
			}
				
			return 'dict';
	}
}
