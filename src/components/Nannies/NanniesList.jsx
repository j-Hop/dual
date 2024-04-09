import { NanniesCard } from "./NanniesCard/NanniesCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNannyFiltered } from "../../redux/selectors";
import { fetchData } from "../../redux/operations";


export const NannyList = ({renderCard}) => {
    const dispatch = useDispatch();
    const filteredNanny = useSelector(getNannyFiltered);


    useEffect(()=>{
        dispatch(fetchData());
    }, [dispatch]);

    return(
        <ul>
            {filteredNanny.slice(0, renderCard).map(nanny =>(
                <li key={nanny.id}>
                <NanniesCard card={nanny}/>
                </li>
            ))}
        </ul>
    );
};
