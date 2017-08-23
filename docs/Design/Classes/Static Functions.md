# Static Functions

## Feature Overview

Classes may define static functions that may be called as members of the class.


## Commands

### `static function declare start`

`static function declare start` `:` *`[privacy]`* `functionName` `returnType` *`[parameterName, parameterType, ...]` `throws` `[possibleExceptionType, ...]`*

Privacy may be `"public"`, `"protected"`, or `"private"`.
The function name may be modified as per the language's convention.
It should be written in GLS in `PascalCase`.

Static functions are ended with `static function declare end`.

### `static function` : *`[privacy]`* `instanceName` `functionName` *`[parameterName, parameterType, ...]`*

Calling a static function is done with `static function`.
Privacy may be `"public"`, `"protected"`, or `"private"`.
The function name may be modified as per the language's convention.
It should be written in GLS in `PascalCase`.


## Usage

```gls
static function declare start : public SetName void newName string
static function declare end

static variable declare : protected JoinNames string firstName string lastName string
static function declare end

static variable declare : private DangerousOperation void throws Exception
static function declare end
```

```gls
static function : public Person SetName "Mark"
static function : protected Person JoinNames "first" "last"
static function : private Person DangerousOperation
```

### CSharp

```csharp
public static void SetName(string newName)
{
}

protected static string JoinNames(string firstName, string lastName)
{
}

private static void DangerousOperation()
{
}
```

```csharp
Person.SetName("Mark");
Person.JoinNames("first", "last");
Person.DangerousOperation();
```

### Java

```java
public static void setName(string newName) {
}

protected static string joinNames(string firstName, string lastName) {
}

private static void dangerousOperation() throws Exception {
}
```

```java
Person.setName("Mark");
Person.joinNames("first", "last");
Person.dangerousOperation();
```

### JavaScript

```javascript
static setName(newName) {
}

static joinNames(firstName, lastName) {
}

static dangerousOperation() {
}
```

```javascript
Person.setName("Mark");
Person.joinNames("first", "last");
Person.dangerousOperation();
```

### Python

```python
@staticmethod
def setName(newName):

@staticmethod
def joinNames(firstName, lastName):

@staticmethod
def dangerousOperation():
```

```python
Person.setName("Mark")
Person._joinNames("first", "last")
Person.__dangerousOperation()
```

### Ruby

```ruby
def self.setName(newName)
end

def self.joinNames(firstName, lastName)
end

def self.dangerousOperation()
end
```

```ruby
person.setName("Mark");
this.joinNames("first", "last");
this.dangerousOperation();
```

### TypeScript

```typescript
public static setName(newName: string): void {
}

protected static joinNames(firstName: string, lastName: string): string {
}

private static dangerousOperation(): void {
}
```

```typescript
Person.setName("Mark");
Person.joinNames("first", "last");
Person.dangerousOperation();
```


## Errata

* Ruby uses a different set of privacy modifiers and concepts than most other languages. Emulating them is planned but currently out of scope.
