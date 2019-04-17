$(document).ready(function() {
    $('div .overflow').each(function() { 
        $(this).wrapInner('<div class="check" />'); 
    });
    mermaid.initialize({startOnLoad:true});
});