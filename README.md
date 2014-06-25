jquery.years-months-input
=========================

jQuery plugin that implements a simple years and months input controlled either by +/- buttons or by typing directly in the fields.

## Usage:

To use JYM, include the .js file on the page and call the initialization method
```html
    <script src="jquery.years-months-input.js"></script>
    <script type="text/javascript">
        $(function() {
        	$(".jym-inputs").initJYM();
        });
```

Adding a JYM input field to the page is simple:
```html
    <div class="jym-inputs">
        <input class="jym-years" type="text" />
        <input class="jym-months" type="text" />
        <input class="jym-up" type="button" value="+" />
        <input class="jym-down" type="button" value="-" />
    </div>
```