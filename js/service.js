function Services() {
    this.fetchData = function() {
        /**
         * Axios trả về đối tượng Promise
         * - Pending (Chờ)
         * - Resolve (Thành công)
         * - Reject (Thất bại)
         */
        return axios({
            url: "https://6044315ca20ace001728eb80.mockapi.io/API/Teacher",
            method: "GET",
        })
    };
}