function ResetDivWidth()
{
    //alert('document.body.clientWidth = '+ document.body.clientWidth);
    var heads = document.getElementsByClassName("head");
    //alert('heads.length = '+heads.length); 
    for (var i=0;i<heads.length;i++)
    {
        heads[i].width = document.body.clientWidth;
    }
    var mini_bars = document.getElementsByClassName("mini_bar");
    //alert('mini_bars.length = '+mini_bars.length); 
    for (var i=0;i<mini_bars.length;i++)
    {
        mini_bars[i].width = document.body.clientWidth;
    }
    var cat_bars = document.getElementsByClassName("cat_bar");
    //alert('cat_bars.length = '+cat_bars.length); 
    for (var i=0;i<cat_bars.length;i++)
    {
        cat_bars[i].width = document.body.clientWidth;
    }
    var pairs = document.getElementsByClassName("pair");
    //alert('pairs.length = '+pairs.length); 
    for (var i=0;i<pairs.length;i++)
    {
        pairs[i].width = document.body.clientWidth;
        
        var left_wide_texts = pairs[i].getElementsByClassName("left_wide_text");
        //alert('left_wide_texts.length at pair '+ i + ' = ' + left_wide_texts.length); 
        newWidth=document.body.clientWidth-430;
        newWidthStyle=newWidth+"px";
        for (var j=0;j<left_wide_texts.length;j++)
        {
            //alert('reset left_wide_texts ' + j + ' at pair '+ i + ' to ' + newWidthStyle); 
            left_wide_texts[j].style.width = newWidthStyle;
        }
        var right_wide_texts = pairs[i].getElementsByClassName("right_wide_text");
        //alert('right_wide_texts.length at pair '+ i + ' = ' + right_wide_texts.length); 
        for (var j=0;j<right_wide_texts.length;j++)
        {
            //alert('reset right_wide_texts ' + j + ' at pair '+ i + ' to ' + newWidthStyle); 
            right_wide_texts[j].style.width = newWidthStyle;
        }
    }
    //alert('The end'); 
    /*
    var texts = document.getElementsByClassName("text");
    for (var i=0;i<texts.length;i++)
    {
            texts[i].width = document.body.clientWidth;
    }
    */
}  