import { FC, useState } from 'react';

const Row: FC<{
    title: string;
    value: string;
    url: string;
}> = ({ title, url, value }) => {
    const [edit, setEdit] = useState(true);
    return (
        <tr>
            <td className=" border-b-2 broder-gray-100 py-2">
                <p> {title}</p>
            </td>
            <td className=" border-b-2 broder-gray-100 py-2">
                {edit ? (
                    <p> {value}</p>
                ) : (
                    <input
                        type="text"
                        className="fixed m-[-13px] border border-sky-400"
                        defaultValue={value}
                    />
                )}
            </td>
            <td className=" border-b-2 broder-gray-100 py-2text-base text-end font-bold ">
                <button type="button" onClick={() => setEdit(!edit)}>
                    {edit ? (
                        'Edit'
                    ) : (
                        <>
                            <button
                                type="button"
                                className="bg-sky-400 text-white mr-3 px-1 rounded"
                            >
                                Save
                            </button>

                            <button type="button"> Cancel</button>
                        </>
                    )}
                </button>
            </td>
        </tr>
    );
};

export default Row;
