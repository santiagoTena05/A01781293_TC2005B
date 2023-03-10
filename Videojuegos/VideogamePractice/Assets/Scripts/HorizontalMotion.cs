/*
Move a GameObject horizontally back and forth using the arrow keys or A and D.

Santiago Tena
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HorizontalMotion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;
    [SerializeField] float limitY;

    Vector3 move;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");

        //Debug.Log("X motion: " + move.x);
        
        //Limit the motion to a specifi range of coordinates
        if (transform.position.x < -limit && move.x < 0)
        {
            move.x = 0;
        }
        else if (transform.position.x > limit && move.x > 0)
        {
            move.x = 0;
        }
        
        if (transform.position.y < -limitY && move.y < 0)
        {
            move.y = 0;
        }
        else if (transform.position.y > limitY && move.y > 0)
        {
            move.y = 0;
        }
        transform.Translate(move * speed * Time.deltaTime);
    }
}
