//　文字色変化
$(function(){
    $('#change-color').on('click',function(){
      $('#target').css('color','red');
    });
  });

//　文字内容変化
  $(function(){
    $('#change-text').on('click',function(){
      $('#target').text('Hello!');
    });
  });

//　フェードアウト
  $(function(){
    $('#fade-out').on('click',function(){
      $('#target').fadeOut();
    });
  });

//　フェードイン
  $(function(){
    $('#fade-in').on('click',function(){
      $('#target').fadeIn();
    });

  });