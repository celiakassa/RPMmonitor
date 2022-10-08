/* Filters */
let delay_timer = null;
let filters = {};

let column = "created_at";
let dir = 'asc';

let page = 1;
let fromData = 0;
let limit = 50;

function requester(from = 0,limitTo = 20, filters = [],order = [],doEmpty = false,setPage = false){
    
    $('select[name="limit"]').val(limit);
    let results = $('#results');

    let url = $('#directory-ajax').data("url");
    let _token = $('#directory-ajax').data("token");
    let category = $('#category').val();


    $.ajax({
        type: "POST",
        url: url,
        data: {
            category : category,
            _token : _token,
            from : from,
            limit : limit,
            filters : filters,
            orders : order,
        },
        //            dataType: 'json',
        success: function (data) {

            if(data.st == "success"){

                if(doEmpty){
                    $('#results').empty().append(data.table);
                }else{
                    $('#results').append(data.table);
                }

                fromData = (parseInt(fromData) + parseInt(limit));

                if(setPage){
                    page = setPage;
                    console.log(page);
                }

                pagination(data.data.recordsFiltered);

            }

        },
        error: function(jqxhr, status, exception) {
            console.log(JSON.stringify(jqxhr));
            console.log(exception);

        }
    });
}

$('.ajax-order').off().on('click',function(){

    let column = $(this).data('name');
    let order = $(this).data('order');
    let dir = 'desc';

    if(order == 'desc'){
        dir = 'asc';
    }else if(order == 'asc'){
        dir = 'desc';
    }

    $('.ajax-order').data('order',"");
    $(this).data('order',dir);
    $('.ajax-order').data('selected',"0");
    $(this).data('selected',1);

    //let limit = $('select[name="limit"]').find(':selected').val();

    /* Refresh the results */
    requester(0, limit, filters,[{ column : column, dir : dir }],true,1);

});

$('select[name="limit"]').off().on('change', function(){

    let selectedLimit = $(event.currentTarget).find(':selected').val();

    limit = selectedLimit;
    /* Refresh the results */
    requester(0, limit, filters,[{ column : column, dir : dir }],true,1);

});

$(document).on("keyup",".text-filter",function(event){

    var identifier = $(this).attr('name');

    if(delay_timer) {
        clearTimeout(delay_timer);
    }

    delay_timer = setTimeout(() => {

        let data = $(event.currentTarget).val().trim();

    if(data != '') {

        filters[identifier] = data;

    }else{
        if(data == ""){
            delete filters[identifier];
        }
    }

    //let limit = $('select[name="limit"]').find(':selected').val();
    /* Refresh the results */
    requester(0, limit, filters,[{ column : column, dir : dir }],true,1);

}, 350);

});

$(document).on("change",".select-filter",function(event){

    var identifier = $(this).attr('name');

    let data = $(event.currentTarget).find(':selected').val();

    filters[identifier] = data;

    //let limit = $('select[name="limit"]').find(':selected').val();

    /* Refresh the results */
    requester(0, limit, filters,[{ column : column, dir : dir }],true,1);

});


function pagination(data){

    //let limit = $('select[name="limit"]').find(':selected').val();

    var pageList = '';
    var className = '';

    console.log(page);

    if(limit >= data){
        pageList += '<li class="disabled"><a href="javascript:void(0);">PREV</a></li>';
        pageList += '<li class="active"><a href="javascript:void(0);">1</a></li>';
        pageList += '<li class="disabled"><a href="javascript:void(0);">NEXT</a></li>';
    }else{

        var pageCount = Math.ceil(data / limit);

        console.log(pageCount);

        if(pageCount <= 7){

            console.log("less");

            if(page == 1){
                pageList += '<li class="disabled"><a href="javascript:void(0);">PREV</a></li>';
            }else {
                pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page - 1) +'">PREV</a></li>';
            }

            for(var i=1;i<=pageCount;i++){

                if(page == i){
                    className = 'class="active"';
                    pageList += '<li '+ className +'><a href="javascript:void(0);">'+ i +'</a></li>';
                }else{
                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ i +'">'+ i +'</a></li>';
                }


            }

            if(page == pageCount){
                pageList += '<li class="disabled"><a href="javascript:void(0);">NEXT</a></li>';
            }else{
                pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page + 1) +'">NEXT</a></li>';
            }



        }else{

            console.log("more");

            if(page == 1){
                pageList += '<li class="disabled"><a href="javascript:void(0);">PREV</a></li>';
            }else {
                pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page - 1) +'">PREV</a></li>';
            }

            if(page <= 2){

                for(var j=1;j<=2;j++){

                    if(page == j){
                        className = 'class="active"';
                        pageList += '<li '+ className +'><a href="javascript:void(0);">'+ j +'</a></li>';
                    }else{
                        pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ j +'">'+ j +'</a></li>';
                    }


                }

                pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                for(var k=(pageCount - 1);k<=pageCount;k++){

                    if(page == k){
                        className = 'class="active"';
                        pageList += '<li '+ className +'><a href="javascript:void(0);">'+ k +'</a></li>';
                    }else{
                        pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ k +'">'+ k +'</a></li>';
                    }


                }

            }else if(page > 2){

                if(page == pageCount){

                    var mid = Math.ceil(pageCount / 2);

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="1">1</a></li>';

                    pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (mid - 1) +'">'+ (mid - 1) +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ mid +'">'+ mid +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (mid + 1) +'">'+ (mid + 1) +'</a></li>';

                    pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (pageCount - 1) +'">'+ (pageCount - 1) +'</a></li>';

                    pageList += '<li class="active"><a href="javascript:void(0);">'+ pageCount +'</a></li>';

                }else if(page == (pageCount - 1)){

                    var mid = Math.ceil(pageCount / 2);

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="1">1</a></li>';

                    pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (mid - 1) +'">'+ (mid - 1) +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ mid +'">'+ mid +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (mid + 1) +'">'+ (mid + 1) +'</a></li>';

                    pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                    pageList += '<li class="active"><a href="javascript:void(0);">'+ (pageCount - 1) +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ pageCount +'">'+ pageCount +'</a></li>';

                }else{
                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="1">1</a></li>';

                    if(page != 3){
                        pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';
                    }

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page - 1) +'">'+ (page - 1) +'</a></li>';

                    pageList += '<li class="active"><a href="javascript:void(0);">'+ page +'</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page + 1) +'">'+ (page + 1) +'</a></li>';

                    pageList += '<li class="disabled"><a href="javascript:void(0);">...</a></li>';

                    pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ pageCount +'">'+ pageCount +'</a></li>';
                }

            }

            if(page == pageCount){
                pageList += '<li class="disabled"><a href="javascript:void(0);">NEXT</a></li>';
            }else{
                pageList += '<li><a href="javascript:void(0);" class="page-setter" data-page="'+ (page + 1) +'">NEXT</a></li>';
            }
        }

    }

    $('.pagination').empty().append(pageList);

    $('.page-setter').click(function(){

        var that = $(this);

        //let limit = $('select[name="limit"]').find(':selected').val();

        var newPage = that.data('page');

        var newFormData = (limit * (newPage-1));

        /* Refresh the results */
        requester(newFormData, limit, filters,[{ column : column, dir : dir }],true,newPage);

    });
}