# mythic-ac

## About it

## Technical state

### Data models

#### Adventure

```json
{
  "id": "<GUID>",
  "name": "<STRING>",
  "date": "<STRING>",
  "theme1": "<STRING>",
  "theme2": "<STRING>",
  "theme3": "<STRING>",
  "theme4": "<STRING>",
  "theme5": "<STRING>",
  "notes": "<STRING>",
  "turningPoints": [
    {
      "id": "<GUID>",
      "status": "<STRING>",
      "plotlineId": "<GUID>",
      "plotPoint1": {
        "event": "<STRING>",
        "charactersInvoked": ["<STRING>", "<STRING>"]
      },
      "plotPoint2": {
        "event": "<STRING>",
        "charactersInvoked": ["<STRING>", "<STRING>"]
      },
      "plotPoint3": {
        "event": "<STRING>",
        "charactersInvoked": ["<STRING>", "<STRING>"]
      },
      "plotPoint4": {
        "event": "<STRING>",
        "charactersInvoked": ["<STRING>", "<STRING>"]
      },
      "plotPoint5": {
        "event": "<STRING>",
        "charactersInvoked": ["<STRING>", "<STRING>"]
      },
      "notes": "<STRING>"
    }
  ]
}
```

#### Turning Point

```json
{
  "id": "<GUID>",
  "status": "<STRING>",
  "plotlineId": "<GUID>",
  "plotPoint1": {
    "event": "<STRING>",
    "charactersInvoked": ["<STRING>", "<STRING>"]
  },
  "plotPoint2": {
    "event": "<STRING>",
    "charactersInvoked": ["<STRING>", "<STRING>"]
  },
  "plotPoint3": {
    "event": "<STRING>",
    "charactersInvoked": ["<STRING>", "<STRING>"]
  },
  "plotPoint4": {
    "event": "<STRING>",
    "charactersInvoked": ["<STRING>", "<STRING>"]
  },
  "plotPoint5": {
    "event": "<STRING>",
    "charactersInvoked": ["<STRING>", "<STRING>"]
  },
  "notes": "<STRING>"
}
```

#### Plot Point

```json
{
  "event": "<STRING>",
  "charactersInvoked": ["<STRING>", "<STRING>"]
}
```

#### Plotline

```json
{
  "id": "<GUID>",
  "name": "<STRING>"
}
```

#### Character

```json
{
  "id": "<GUID>",
  "name": "<STRING>"
}
```
