import React from 'react';

const AddLinkForm = (props) => {
    return (
        <div className={props.myClass}>
            <form>
                <div className="form-group">
                    <label className="text-white">Site Name</label>
                    <input onChange={props.handleFormInput} type="text" name="site" className="form-control" placeholder="Site Name" value={props.form.site}/>
                </div>
                <div className="form-group">
                    <label className="text-white">URL</label>
                    <input onChange={props.handleFormInput} type="text" name="url" className="form-control" placeholder="Site URL" value={props.form.url}/>
                </div>
                <div className="form-group">
                    <label className="text-white">Tags</label>
                    <input onChange={(e)=>props.handleFormInputArr(e,0)} type="text" name="tags" className="form-control" placeholder="Tags" value={props.form.tags[0]}/>
                </div>
                <div className="form-group">
                    <label className="text-white">Tags 2</label>
                    <input onChange={(e)=>props.handleFormInputArr(e,1)} type="text" name="tags" className="form-control" placeholder="Tags 2" value={props.form.tags[1]}/>
                </div>
                <div className="form-group">
                    <label className="text-white">Tags 3</label>
                    <input onChange={(e)=>props.handleFormInputArr(e,2)} type="text" name="tags" className="form-control" placeholder="Tags 2" value={props.form.tags[2]}/>
                </div>
            </form>
            <button onClick={props.submitForm} type="button" className="btn btn-dark">Add Link</button>
            <button onClick={props.toggle} type="button" className="btn btn-info">Return</button>
        </div>
    )
}

export default AddLinkForm;