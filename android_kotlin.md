# Android Kotlin

## Set Click Listener

```kt
private lateinit var binding: ActivityMainBinding

override fun onCreate(savedInstanceState: Bundle?){
    super.onCreate(savedInstanceState)

// autre facon de sélectionner
    binding = ActivityMainBinding.inflate(LayoutInflater)
    val view = binding.root
    setContentView(view)
    
    val rollButton : Button = findViewById(R.id.myButton)
    rollButton.text = "Lets roll"
    rollButton.setOnClickListener{
        Toast.makeText(this, "button clicked", Toast.LENGTH.LONG).show()
    }
}
```