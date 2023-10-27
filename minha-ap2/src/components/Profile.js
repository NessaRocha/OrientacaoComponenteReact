import Card from "./Card";
import Avatar from "./Avatar"
export default function Profile() {
    return(
        <Card>
            <Avatar
            size={100}
            person={{
                name: 'Aluno',
                imageId: 'huadkp1'
            }}
            />
        </Card>
    );

}
