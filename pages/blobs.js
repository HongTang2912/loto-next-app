import {blobs} from '../utils/configuration/blobs'

const blobss = () => {
    console.log(blobs);
    return (
        <>
        {
            blobs.map((b, index) => (
                <div key={index}>{index}{b('#999')}</div>
            ))
        }
        </>
    )
}

export default blobss;