//インプットエレメントをIDで選択します。
const nameInput = document.getElementById("nameinput")
const mailInput = document.getElementById("mailinput")
const memoInput = document.getElementById("memoinput") 
const submitBtn = document.getElementById("submit-btn")

//ディスプレイの部分はCLASS名で選択します。
const displayBox = document.querySelector(".display-box")

//ユーザーのデータが保存されるリスト
//ここで作るとグローバル(Global Variable)になるので、スクリプトのどこからでもアクセスできる。
const allInfo = []

//送信ボタン押す時のファンクション
submitBtn.addEventListener("click",()=>{
//データを一時的でも保存しないといけないのでUSERのオブジェクトを作ります。
    const user = {}
//それぞれのインプットの中身をつかんで、USERのオブジェクトに入れる。
    user.name = nameInput.value
//インプットの中身を取ったら、空っぽの状態に戻す。
    nameInput.value = ""
    user.mail = mailInput.value
    mailInput.value = ""
    user.memo = memoInput.value
    memoInput.value = ""
//まとめたデータをグローバルのallInfoリストの後ろに付け加える。
    allInfo.push(user)
//データを表示するファンクションを実行する。
    showInfo()
})

//データを表示するファンクション
function showInfo() {
//リストの長さ(allInfo.length)を使って最新のデータだけを選択する（だけど０から数えるのでー１）
    const newUser = allInfo[allInfo.length-1]
    const name = newUser.name
    const mail = newUser.mail
    const memo = newUser.memo
//ディスプレイにデータをのせる。＋＝を使うので以前にあるデータを消せず，その後に入る。
    displayBox.innerHTML += `<div>${name} ${mail} ${memo}</div>`
}