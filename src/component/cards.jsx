"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cards() {

    const [items, setItems] = useState([]);
    const [stores, setStores] = useState([]);

    useEffect(() => {
      axios
        .get('https://sbd-express-wesleyfrederickoh.q7szht.easypanel.host/item')
        .then((res) => {
          console.log("Data fetched:", res.data); // 🔍 Check if this logs
          if (res.data.success) {
            setItems(res.data.payload);
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
        });
    }, []);

      useEffect(() => {
        axios
    .get('https://sbd-express-wesleyfrederickoh.q7szht.easypanel.host/store/getAll')
    .then((res) => {
      console.log("Stores fetched:", res.data);
      if (Array.isArray(res.data)) {
        setStores(res.data);
      }
    })
      }, []);

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
        {items.map((item) => {
      // Ensure stores and item.store_id are available
      const store = stores.find(
        (store) => store.id.trim().toLowerCase() === item.store_id.trim().toLowerCase()
      );

      console.log("Item store_id:", item.store_id);
console.log("All store IDs:", stores.map(s => s.id));

      
      if (!store) {
        console.log(`No store found for item with store_id: ${item.store_id}`);
      }

      return (
        <div key={item.id} className="bg-[#FED2E2] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48 w-full">
            <img src={`${item.image_url}?random=${item.id}`} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 line-clamp-1">{item.name}</h3>
            <p className="text-gray-600 line-clamp-3">Stock: {item.stock}</p>
            <p className="text-gray-600 line-clamp-3">Rp. {item.price}</p>
            <p className="text-gray-600 line-clamp-3">Store: {store ? store.name : 'Unknown Store'}</p>
          </div>
        </div>
      );
})}

        </div>
    )
}