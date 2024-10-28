import { useLoaderData } from "react-router-dom";
import { SearchLoaderResults } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

const SearchPage = () =>{

    const {searchResults} = useLoaderData() as SearchLoaderResults;
    
    const renderResults = searchResults.map((result) =>{
        return <PackageListItem pack={result} key={result.name}/>
    });

    return <div>
        <h1 className="text-2xl font-bold my-6">Search Results </h1>
        <div className="space-y-4 mt-4">
            {renderResults}
        </div>
    </div>
}

export default SearchPage;