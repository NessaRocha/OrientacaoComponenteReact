export default function Avatar(){
    const avatar = 'https://www.sitiodamata.com.br/pub/media/webp_image/wysiwyg/wildflowers-1.webp';
    const description = 'Aluno';
    return (
        <img
        className="avatar"
        src={avatar}
        alt={description}
        />
    );
}