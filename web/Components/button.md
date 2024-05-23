---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Guides from '@site/src/components/Guides/Guides';
import GuidesNo from '@site/src/components/GuidesNo/GuidesNo';

# Button

Buttons let people take action and make choices with one tap.

<Tabs>
  <TabItem value="apple" label="Easypark" default>
  <ThemedImage
alt="Docusaurus themed image"
sources={{ light: useBaseUrl('/img/ep-button-light.svg'), dark: useBaseUrl('/img/ep-button-dark.svg')}}/>
  </TabItem>
  <TabItem value="orange" label="ParkMobile">
  <ThemedImage
alt="Docusaurus themed image"
sources={{ light: useBaseUrl('/img/pm-button-light.svg'), dark: useBaseUrl('/img/pm-button-dark.svg')}}/>
  </TabItem>
</Tabs>

### Code

<Tabs>
  <TabItem value="apple" label="iOS" default>
   ```swift
import Rally

RallyFilledButton(title: "Filled button") {
//put your action here
}

````
</TabItem>
<TabItem value="orange" label="Android">
 ```jsx
RallyFilledButton(
    text = "Rally",
    icon = RallyTheme.icons.infoFilled
)
````

  </TabItem>
  <TabItem value="banana" label="Web">
    ```jsx
  import { Button, PrimaryFilledButtonComponent } from "components/Button"

  <PrimaryFilledButtonComponent /> 
```
  </TabItem>
</Tabs>

### Do's and Don'ts

Buttons let people take action and make choices with one tap.

<div style={{display: "flex", width: "100%", gap: "1rem"}}>
<Guides />
<GuidesNo />
</div>
