import { TeacherContainer, ImgTeacher, Label} from "./styles";

interface TeacherProps{
    name: React.ReactNode;
    nickName?: React.ReactNode;
    speciality?:React.ReactNode;
    dirImg?:any;
}

export function Teacher(props: TeacherProps){
    return(
        <TeacherContainer>
            <ImgTeacher src = {props.dirImg}/>
            <Label>
                {props.name}
                {props.nickName}
                {props.speciality}
            </Label>
        </TeacherContainer>

    )
}