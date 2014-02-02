datatype
========

Powerful type detection alternative to Javascript's "typeof" function

Overview
-
Javascript's typeof function is adequate for primitive types, but is pretty much useless for distinguishing between different types of objects like arrays and key/value arrays. "datatype" was written to fill this gap and give more useful type information.

The table below compares "datatype" output with output from "typeof" for various data types

```
Data                  typeof output     datatype output
-----------------------------------------------------------
12345                 number            int
-----------------------------------------------------------
123.45                number            float
-----------------------------------------------------------
"bill the cat"        string            string
-----------------------------------------------------------
[1, 2, 3]             object            array
-----------------------------------------------------------
{a: 1, b: 2, c: 3}    object            dict
-----------------------------------------------------------
new Date()            object            date
-----------------------------------------------------------
new Image()           object            image
-----------------------------------------------------------
```

In addition to Javascript types, "datatype" can also detect
HTML node types

```
Data                  typeof output     datatype output
-----------------------------------------------------------
<head>                object            html_head
-----------------------------------------------------------
<body>                object            html_body
-----------------------------------------------------------
<a>                   object            html_anchor
-----------------------------------------------------------
<span>                object            html_span
-----------------------------------------------------------
etc...
```

Installation
-
Installing "datatype" is very easy. Just paste the source code between a &lt;script&gt;&lt;/script&gt; tag pair in your document head, or download and link to it with &lt;script language="javascript" src="path/to/datatype.js"&gt;&lt;/script&gt;


Usage
-
Once downloaded, use it just as you would "typeof"

```
var type		= datatype(someValue);

if (type == 'date')
	/* do date stuff */
else if (type == 'array')
	/* do array stuff */
else if (type == 'dict')
	/* do dict stuff */
else if (type == 'image')
	/* do image stuff */
else if (type == 'html_span')
	/* do html_span stuff */
```

Compatibility
-
"datatype" has been tested in Firefox, Chrome, Safari and Opera on a Mac. I don't have access to a Windows computer so there may be some issues when run in IE. If you are a Windows/IE user, feel free to test "datatype" and report any bugs.

Enjoy!
