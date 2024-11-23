export default function EditPage() {
    return (
        <div>
            <h1>Bilgilerinizi Düzenleyin</h1>
            <form>
                <input placeholder="Adınız" />
                <textarea placeholder="Kendinizi tanıtın"></textarea>
                <button type="submit">Kaydet</button>
            </form>
        </div>
    );
}
