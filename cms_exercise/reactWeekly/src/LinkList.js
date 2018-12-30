import React from 'react';


const LinkList = (props) => {
    const remove = props.remove
    const list = props.list
    const keyWord = props.filter
    let filterList = []
    filterList = list.filter((el) => {
        let nested = el.tags.join(", ")
        return nested.toLowerCase().includes(keyWord.toLowerCase()) || !keyWord
    })


    const listItems = filterList.map((el) => {
        let nested = el.tags.join(" ")
        let linky = "//" + el.url
        return (
            <tr key={el.id}>
                <td>{el.site}</td>
                <td><a href={linky} target="_blank">{el.url}</a></td>
                <td>{nested}</td>
                <td onClick={() => remove(el.id)}>x</td>
            </tr>
        )
    })

    return (
        <table style={{ "width": "100%" }}>
            <tbody>
                <tr>
                    <th>Site</th>
                    <th>URL</th>
                    <th>Tags</th>
                    <th>Remove</th>
                </tr>
                {listItems}
            </tbody>
        </table>
    )
}



export default LinkList;