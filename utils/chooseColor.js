export function chooseColor(opened, secret) {
    let color = "#fff";
    if (opened) {
      if (secret) {
        color = "#ABD4FE";
      } else {
        color = "#eee";
      }
    }
    return color;
  }
  