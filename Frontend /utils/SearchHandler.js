export async function search({Transactions , Input ,setFilter}) {
    const query = Input.toLowerCase().trim();
    if (query === "") {
        setFilter(Transactions);
        return;
    }
    const results = await Transactions.filter((tran) => {
        const title = tran.title.toLowerCase();
        return title.includes(query);
    });
    setFilter(results)
}