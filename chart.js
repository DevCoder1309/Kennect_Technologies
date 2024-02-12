const ctx = document.getElementById("myChart");
ctx.height = 100;
let arr = [];
num = 6;
while (num != 0) {
  const a1 = Math.floor(Math.random() * 20) + 1;
  arr.push(a1);
  num--;
}

let obj = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
    datasets: [
      {
        label: "Array element value",
        data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
        borderWidth: 0.3,
        barThickness: 50,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function insertion() {
  console.log("insertion code ran");
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function selection() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function bubble() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

function quick() {
  arr = quicksort(arr);
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergealgo() {
  arr = mergesort(arr);
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function shell() {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  obj.destroy();
  obj = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
      datasets: [
        {
          label: "Array element value",
          data: [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]],
          borderWidth: 0.3,
          barThickness: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
