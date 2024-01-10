import React from "react";
import { PostCreate, PostList } from "./components";

const App = () => {
    return (
        <div className="flex flex-col w-full h-screen items-center py-20">
            <PostCreate />
            <PostList />
        </div>
    );
};

export default App;
