const BigImg = (targetId,SRC) =>{
    $(()=>{
        $(targetId).click(()=>{
            var src = $(this).attr('src');
            $('<div>').css({
                background: `black url("../static/WorkApp2/images/${SRC}") no-repeat center`,
                backgroundSize: 'contain',
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: '10000',
                top: '0',
                left: '0',
                cursor: 'zoom-out'
            }).click(function () {
                $(this).remove();
            }).appendTo('body');
        })
    })
}