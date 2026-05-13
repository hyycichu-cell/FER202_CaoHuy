// Hàm 1: Chao1 nhận tham số tên
function Chao1(ten) {
  console.log("Xin chào, " + ten + "!");
}

// Gọi hàm Chao1
Chao1("Huy");


// Hàm 2: Chao2 nhận tham số là đối tượng Person
function Chao2(person) {
  console.log("Xin chào, " + person.name + "!");
}

// Tạo đối tượng Person mẫu
const nguoi1 = {
  id: 1,
  name: "Huy",
  age: 20,
  address: "TP. Hồ Chí Minh"
};

// Gọi hàm Chao2
Chao2(nguoi1);