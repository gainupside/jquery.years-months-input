jquery.years-months-input
=========================

jQuery plugin that implements a simple years and months input controlled either by +/- buttons or by typing directly in the fields.

## Usage:

To use JYM, include the .js file on the page and call the initialization method
```html
        <script src="jquery-1.11.3.min.js"></script>
        <script src="jquery-ui.min.js"></script>
        <script src="jquery.years-months-input.js"></script>
        <script type="text/javascript">
            $(function() {
                $(".jym-inputs").initJYM({
                    value: 60,
                    min: 36,
                    max: 120
                });
            });
        </script>
```

Adding a JYM input field to the page is simple:
```html
        <div class="jym-inputs">
            <input class="jym-years" type="text" placeholder="Years" />
            <input class="jym-months" type="text" placeholder="Months" />
        </div>
```