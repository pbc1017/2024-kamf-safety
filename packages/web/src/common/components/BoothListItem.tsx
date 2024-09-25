import React from "react";

import Typography from "@kamf-safety/web/common/components/Typography";

const BoothListItem: React.FC<{ index: number; title: string }> = ({
  index,
  title,
}) => (
  <Typography
    fs={20}
    color="WHITE"
    fw="MEDIUM"
    style={{ width: "100%", textAlign: "left", padding: "0px 16px" }}
  >
    {index} {title}
  </Typography>
);

export default BoothListItem;
