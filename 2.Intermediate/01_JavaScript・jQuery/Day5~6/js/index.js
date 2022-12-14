/*
ライブラリ使用可能

❶コース一覧をクリックすると
初級・中級・上級のメニューを表示
開閉時間の指定は不要
*/
$(".dropdown").click(() => {
  $(".dropdown").find("ul").slideToggle("slow");
});

/*
❷「ページトップに戻る」ボタンの実装
トップから80pxスクロールしたら
300ms（0.3秒）かけて
フェードイン・フェードアウトで表示
表示してる間はボタンはページ右下に固定
ボタンを押したら500ms（0.5秒）かけてページトップへ戻る
*/

$(".scroll-top").hide();
$(window).scroll(() => {
  if ($(this).scrollTop() > 80) {
    $(".scroll-top").fadeIn(300);
  } else {
    $(".scroll-top").fadeOut(300);
  }
});

$(".scroll-top").click(() => {
  $("html, body").animate({
    scrollTop: 0.5,
  });
  return false;
});

/*
ライブラリ使用不可

❶モーダルで画像の拡大表示
コース一覧の画像をクリックすると
縦横画面いっぱいに薄いグレーの背景ボックスを表示
その枠の中心に拡大されたコース写真を表示
画面のどこかをクリックすると拡大写真と背景ボックスを非表示
アニメーションはフェードイン・フェードアウト
*/
const modalWrapper = document.querySelector(".modal-wrapper");

const modalImage = document.querySelector(".modal-image");

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.getAttribute("src");
    modalWrapper.classList.add("show");
    modalImage.classList.add("show");
    modalImage.setAttribute("src", src);
  });
});

modalWrapper.addEventListener("click", () =>
  modalWrapper.classList.toggle("show")
);
