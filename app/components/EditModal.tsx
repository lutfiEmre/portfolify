type EditModalProps = {
    onSave: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function EditModal({ onSave }: EditModalProps) {
    return (
        <div className="modal">
            <form onSubmit={onSave}>
                <input placeholder="Adınız" />
                <textarea placeholder="Açıklama"></textarea>
                <button type="submit">Kaydet</button>
            </form>
        </div>
    );
}
