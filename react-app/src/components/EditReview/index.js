
function EditReview ({review}){

    const [picture_aws_link, setpicture_aws_link] = useState()
    const [] = useState()
    const dispatch = useDispatch();
    const {closeMdoal} = useModal()


    const onSubmit = async (e) =>{

        e.preventDefault()

        const formData = new FormData()
        formData.append('desc', desc)
        formData.append('picture_aws_link',picture_aws_link)
    }

    return(


    )



}

export default EditReview;
