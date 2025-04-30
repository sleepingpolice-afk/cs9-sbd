"use client"

export default function Cards() {
    const response = {
        page: 1,
        results: [
        {
        userId: 1,
        id: 1,
        title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi autad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsamiure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
        },
        {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolorneque",
        image: "https://picsum.photos/500",
        },
        ],
        };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <img src={`${item.image}?random=${item.id}`} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3">{item.body}</p>
                <button className="mt-4 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">
                Read More
                </button>
            </div>
            </div>
        ))}
        </div>
    )
}