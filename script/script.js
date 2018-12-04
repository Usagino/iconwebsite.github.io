console.log(json_data.hurukawa.useCase);
// const_data is JSON data
var json_length = Object.keys(json_data).length;
console.log(`JSONの長さは${json_length}`); // 15
$(function() {


  let window_size = $(window).height()
  let scroll_pos = $(window).scrollTop();


  if ($('#index').length) {
    let pos_card = $(".introduction__wrap__imagebox").offset();
    console.log(pos_card.top - window_size / 4);
    $(window).scroll(function() {
      scroll_pos = $(window).scrollTop();
      if (scroll_pos > pos_card.top - window_size / 2) {
        $(".introduction__wrap__imagebox--card1").addClass('cardOpen1');
        $(".introduction__wrap__imagebox--card3").addClass('cardOpen2');
      }
    });
  }

  if($('#icons').length){
    const creator_array =[
      "hurukawa",
      "takahasi",
      "suzuki",
      "kato",
      "ito",
      "nakazawa",
      "dora",
      "keito",
      "kusuhara",
      "hara",
      "samu",
      "mine",
      "kimura",
      "saegusa",
      "matuba"
    ];

    for (let i = 1; i < Object.keys(json_data).length; i++) {
      let folda_name = json_data[creator_array[i - 1]].foldaName;
      console.log(folda_name);
      let random = Math.floor( Math.random() * 100 );
      $('.content__wrap').append(`<div class="cardbox"><img src="material/icons/${folda_name}/icon-${random}.png"></div>`);
    }
    $(".cardbox").on('click', function() {
      $(".show__wrapbox__textbox--name").empty();
      $(".show__wrapbox__textbox--title").empty();
      $(".show__wrapbox__textbox--text").empty();
      $(".show__wrapbox__cardbox--image").attr("src",``);
      $(".show__wrapbox__cardbox--link").attr("href",``);
      for (var i = 0; i <12; i++) {
        $('.show__wrapbox__icons').empty();
      }
      $(".show").css("transform","translateX(0%)");
      let card_num = $(this).index();
      $(".show__wrapbox__textbox--name").append(json_data[creator_array[card_num]].creatorName);
      $(".show__wrapbox__textbox--title").append(json_data[creator_array[card_num]].seriesName);
      $(".show__wrapbox__textbox--text").append(json_data[creator_array[card_num]].textBig);
      random = Math.floor( Math.random() * 100 );
      let folda_name = json_data[creator_array[card_num]].foldaName;
      $(".show__wrapbox__cardbox--image").attr("src",`material/icons/${folda_name}/icon-${random}.png`);
      $(".show__wrapbox__cardbox--link").attr("href",`material/icons/${folda_name}.zip`);
      for (var i = 0; i <12; i++) {
        $('.show__wrapbox__icons').append(`
          <li class="show__wrapbox__icons--icon">
            <img src="material/icons/${folda_name}/icon-${i}.png">
          </li>`);
      }
    });
    $(".show__back").on('click', function() {
      $(".show").css("transform","translateX(-100%)");
      $(".show__wrapbox__textbox--name").empty();
      $(".show__wrapbox__textbox--title").empty();
      $(".show__wrapbox__textbox--text").empty();
      $(".show__wrapbox__cardbox--image").attr("src",``);
      $(".show__wrapbox__cardbox--link").attr("href",``);
      for (var i = 0; i <12; i++) {
        $('.show__wrapbox__icons').empty();
      }

    });
  }
});
