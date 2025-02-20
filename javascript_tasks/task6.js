function reverseName(name) {
    let reversedName = "";
    let index = name.length - 1;

    while (index >= 0) {
        reversedName += name[index];
        index--;
    }

    console.log(`Enter Name: ${name}`);
    console.log(`Reversed Name: ${reversedName}`);
}

let employeeName = "John";
reverseName(employeeName);
