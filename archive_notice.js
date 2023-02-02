main();

/**
 * Show a notification that this post is an archived post and not
 * up to date.
 */
function archive_notice() {
  const notice = document.createElement("div");
  notice.innerHTML = "Dies ist ein archivierter Beitrag. Bitte besuchen Sie die aktuelle Seite unter <a href='https://www.fsmathe.hhu.de/'>https://www.fsmathe.hhu.de/</a>";
  notice.style.position = "absolute";
  notice.style.top = "0";
  notice.style.left = "0";
  notice.style.width = "100%";
  notice.style.padding = "1rem";
  notice.style.backgroundColor = "#ff0000";
  notice.style.color = "#ffffff";
  notice.style.textAlign = "center";
  notice.style.fontWeight = "bold";
  notice.style.fontSize = "2rem";
  notice.style.zIndex = "1000";
  document.body.insertBefore(notice, document.body.firstChild);
  document.body.style.paddingTop = "4rem";
}

function main() {
  archive_notice();
}
